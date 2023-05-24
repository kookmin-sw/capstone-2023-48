import '../mainContent.style.css';
import './detail.style.css';
import React, {useState, useContext, useEffect} from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {ProjectContext} from '../../../contexts/project.context';

//place의 테스트 데이터
const test_place1 = {
    'city': '서울특별시',
    'id': '1',
    'project_id': 'currentProject._id',
    'place_title': '해운대 해변',
    'formatted_address': '여행지 주소',
    'geometry': '여행지 좌표',
    'photos': '여행지 사진 Array (최대 length : 10)',
    'startAt': '12:00',
    'endAt': '  ',
    'date': '2023-05-12',
}
const test_place2 = {
    'city': '서울특별시',
    'id': '2',
    'project_id': 'currentProject._id',
    'place_title': '광안리',
    'formatted_address': '여행지 주소',
    'geometry': '여행지 좌표',
    'photos': '여행지 사진 Array (최대 length : 10)',
    'startAt': '10:00',
    'endAt': '여행지 일정 죵료시간',
    'date': '2023-05-12',
}
const test_place3 = {
    'city': '서울특별시',
    'id': '3',
    'project_id': 'currentProject._id',
    'place_title': '쌍둥이 돼지 국밥',
    'formatted_address': '여행지 주소',
    'geometry': '여행지 좌표',
    'thumbnail': '여행지 사진 photos[0]',
    'startAt': '09:00',
    'endAt': '여행지 일정 죵료시간',
    'date': '2023-05-12',
}
const test_place4 = {
    'city': '서울특별시',
    'id': '4',
    'project_id': 'currentProject._id',
    'place_title': '칠성 횟집',
    'formatted_address': '여행지 주소',
    'geometry': '여행지 좌표',
    'thumbnail': '여행지 사진 photos[0]',
    'startAt': '18:00',
    'endAt': '여행지 일정 죵료시간',
    'index': '일정 index'
}
const test_place5 = {
    'id': '5',
    'project_id': 'currentProject._id',
    'place_title': '여행지 이름',
    'formatted_address': '여행지 주소',
    'geometry': '여행지 좌표',
    'thumbnail': '여행지 사진 photos[0]',
    'startAt': '여행지 일정 시작시간',
    'endAt': '여행지 일정 죵료시간',
    'index': '일정 index'
}
const test_place6 = {
    'id': '6',
    'project_id': 'currentProject._id',
    'place_title': '여행지 이름',
    'formatted_address': '여행지 주소',
    'geometry': '여행지 좌표',
    'thumbnail': '여행지 사진 photos[0]',
    'startAt': '여행지 일정 시작시간',
    'endAt': '여행지 일정 죵료시간',
    'index': '일정 index',
    'date': '2023-05-13',
}


//currentProject의 테스트 데이터
const testData = {
    ['day1_id']: {
        name: "day1",
        date: '2023-05-14',
        items: [
            test_place1, test_place2, test_place3, test_place4
        ],
    },
    ['day2_id']: {
        name: "day2",
        date: '2023-05-15',
        items: []
    },
    ['day3_id']: {
        name: "day3",
        date: '2023-05-16',
        items: []
    },
    ['day4_id']: {
        name: "day4",
        date: '2023-05-17',
        items: []
    },
    ['day5_id']: {
        name: "day5",
        date: '2023-05-18',
        items: []
    },
    ['day6_id']: {
        name: "day5",
        date: '2023-05-18',
        items: []
    },
    ['day7_id']: {
        name: "day5",
        date: '2023-05-18',
        items: []
    },
};

const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const {source, destination} = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
}


const Detail = (props) => {
    const {zIndex} = props;

    const {currentProject} = useContext(ProjectContext);
    const [columns, setColumns] = useState(testData);

    useEffect(() => {
        if (currentProject) {
            console.log(currentProject);
            console.log(currentProject.days + 1);
            let array = new Array(currentProject.days + 1).fill([]);
            if (currentProject.plan.length) {
                currentProject.plan.map((e) => {
                    if (e.day !== undefined) {
                        array[e.day - 1].push(e);
                    }
                })
            }   
            console.log(array);
        }
    }, [currentProject])
    return (
        <div className='main-content-wrapper detail-plan-wrapper' style={{display: "flex", zIndex}}>
            <DragDropContext
                onDragEnd={result => onDragEnd(result, columns, setColumns)}
            >
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <div className='detail-plan-column-container' key={columnId}>
                            <h2>{column.name}</h2>
                            <div style={{margin: 8}}>
                                <Droppable droppableId={columnId} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div className='detail-plan-column'
                                                 {...provided.droppableProps}
                                                 ref={provided.innerRef}
                                                 style={{
                                                     background: snapshot.isDraggingOver
                                                         ? "rgb(252, 246, 246)"
                                                         : "white",
                                                 }}
                                            >
                                                {column.items.map((item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        className='detail-plan-column-item'
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            userSelect: "none",
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#263B4A"
                                                                                : "#ffd0d5",
                                                                            color: "black",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                    >
                                                                        <div>{item.place_title}</div>
                                                                        <div>{item.startAt}</div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        </div>
                    );
                })}
            </DragDropContext>
        </div>
    );
};
export default Detail;