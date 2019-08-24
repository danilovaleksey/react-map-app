import React from 'react';
import PropTypes from "prop-types";
import styles from './List.module.scss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



class List extends React.Component {
  static propTypes = {
    markers: PropTypes.array,
    deleteMark: PropTypes.func,
    updateMarkers: PropTypes.func,
  };
  static defaultProps = {
    markers: [],
    deleteMark: ()=> {},
    updateMarkers: ()=>{},
  };
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  onDragEnd = (result) => {
    const {
      markers,
      updateMarkers
    } = this.props;

    if (!result.destination) {
      return;
    }

    const items = this.reorder(
        markers,
        result.source.index,
        result.destination.index
    );
    updateMarkers(items);
  };
  render() {
    const {
      markers,
      deleteMark,
    } = this.props;
    return (
        <div className={styles.list}>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId={"droppable"}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                  {markers.map((item, index) => (
                      <Draggable key={item.id} draggableId={String(item.id)} index={index}  >
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                              <div  className={styles.listItem}>
                                <p> {item.markerName}</p>
                                <button onClick={() => deleteMark(index)}>Delete</button>
                              </div>
                            </div>
                        )}
                      </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
            )}
          </Droppable>
        </DragDropContext>
        </div>
    )
  }
}

export default List;