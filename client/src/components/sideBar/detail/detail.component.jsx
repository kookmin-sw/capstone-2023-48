import '../mainContent.style.css';
import './detail.style.css';
import React, {useState, useContext, useEffect} from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {ProjectContext} from '../../../contexts/project.context';
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
        items: [test_place1, test_place2, test_place3, test_place4],
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
            console.log(currentProject)
            const startDate = currentProject.startAt;
            const count = currentProject.days + 1;
            const planArray = [];
            for (let i = 0; i < count; i++) {
                const date = new Date(startDate);
                date.setDate(date.getDate() + i);

                const plan = {
                    name: 'day' + (i + 1),
                    date: date.toISOString().split('T')[0],
                    items: []
                };

                const key = 'day' + (i + 1) + '_id';
                planArray[key] = plan;
            }
            let order = 1;

// day 값이 1인 경우 해당 날짜의 items에 plan 객체 추가
            for (const planObj of currentProject.plan) {
                const day = planObj.day;
                const planObject = planObj;

                if (day >= 1 && day <= count) {
                    const key = 'day' + day + '_id';
                    planArray[key].items.push(planObject);
                    planArray[key].id = order;
                    order++;
                }
            }
            console.log(testData);
            console.log(planArray);
            setColumns(planArray);
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
                                                    const date = new Date(item.startAt);
                                                    const year = date.getFullYear();
                                                    const month = (date.getMonth() + 1).toString().padStart(2, '0');
                                                    const day = date.getDate().toString().padStart(2, '0');
                                                    const hours = date.getHours().toString().padStart(2, '0');
                                                    const minutes = date.getMinutes().toString().padStart(2, '0');
                                                    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
                                                    return (
                                                        <Draggable
                                                            key={item._id}
                                                            draggableId={item._id}
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
                                                                        <div>{item.name}</div>
                                                                        <div>{formattedDate}</div>
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