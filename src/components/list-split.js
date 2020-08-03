import React, { Fragment, Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { $borderColor } from "@/style/variables";

function getOrder(listIndex, index, lineSums) {
  return listIndex * lineSums + index + 1;
}

function listSplitFunc(list, splitRows) {
  const lineSums = Math.ceil(list.length / splitRows);
  let thunkedList = [];
  for (let i = 0; i < splitRows; i++) {
    thunkedList[i] = list.slice(i * lineSums, (i + 1) * lineSums);
  }
  return thunkedList;
}

class ListSplit extends Component {
  render() {
    const { list, splitRows, CardEle } = this.props;
    const thunkedList = listSplitFunc(list, splitRows);
    const rowSums = Math.ceil(list.length / splitRows);
    return (
      <ListSplitWrap className="list-wrap">
        {thunkedList.map((list, listIndex) => {
          let rowHtml = (
            <div className="list">
              {list.map((card, index) => {
                return (
                  <CardEle
                    orderIndex={getOrder(listIndex, index, rowSums)}
                    key={card.id}
                    card={card}
                  ></CardEle>
                );
              })}
            </div>
          );
          if (listIndex === splitRows - 1) {
            return <Fragment key={`list-${listIndex}`}>{rowHtml}</Fragment>;
          } else {
            return (
              <Fragment key={`list-${listIndex}`}>
                {rowHtml}
                <div className="list-split"></div>
              </Fragment>
            );
          }
        })}
      </ListSplitWrap>
    );
  }
}

export default ListSplit;

ListSplit.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  CardEle: PropTypes.func.isRequired,
  onCardClick: PropTypes.func,
  splitRows: PropTypes.number,
};

ListSplit.defaultProps = {
  onCardClick: () => {},
  splitRows: 2,
};

const ListSplitWrap = styled.div`
  &.list-wrap {
    display: flex;

    .list {
      flex: 1;
      overflow: hidden;

      > div {
        border-bottom: 1px solid ${$borderColor};
        &:first-child {
          border-top: 1px solid ${$borderColor};
        }
      }
    }
    .list-split {
      flex: 0 0 20px;
    }
  }
`;
