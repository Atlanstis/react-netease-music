import React, { Component } from "react";
import classnames from "classnames";
import ArtistsName from "@/components/artists-name";
import SongName from "@/components/song-name";
import ListPlayIcon from "@/components/list-play-icon";
import { formatTime } from "@/utils/common";
import "./style.less";

class ListTable extends Component {
  getColumName(colum) {
    return `list-table_column_${colum.type}`;
  }

  cellItem(item, colum, active) {
    switch (colum.type) {
      case "playIcon": {
        if (active) {
          return <ListPlayIcon active={active} />;
        }
        return null;
      }
      case "artist": {
        return <ArtistsName artists={item.artists} />;
      }
      case "duration": {
        return <p className="duration-time">{formatTime(item.durationSec)}</p>;
      }
      case "name": {
        return <SongName name={item.name} alias={item.alias} />;
      }
      default:
        return null;
    }
  }

  componentDidMount() {
    this.calcCellWidth();
  }

  componentDidUpdate() {
    this.calcCellWidth();
  }

  calcCellWidth() {
    let $el = this.refs.el;
    let tableWidth = $el.clientWidth;
    let restWidth = tableWidth;
    let coloumWidth = this.props.colums.reduce((total, curr) => {
      return total + curr.width;
    }, 0);
    this.props.colums.forEach((colum, index) => {
      let columWidth = 0;
      if (index !== this.props.colums.length - 1) {
        columWidth = Number(
          ((colum.width / coloumWidth) * tableWidth).toFixed(2)
        );
        restWidth -= columWidth;
      } else {
        columWidth = restWidth;
      }
      let nodeList = $el.querySelectorAll(`.${this.getColumName(colum)} .cell`);
      nodeList.forEach((node) => {
        node.style.width = `${columWidth}px`;
      });
    });
  }

  render() {
    const { colums, list } = this.props;
    return (
      <div className="list-table" ref="el">
        <div className="list-table__body-wrapper list-table--striped list-table--enable-row-hover">
          <table
            className="list-table__body"
            cellPadding="0"
            cellSpacing="0"
            border="0"
          >
            <colgroup>
              {colums.map((colum) => {
                let columKey = this.getColumName(colum);
                return (
                  <col
                    key={columKey}
                    name={columKey}
                    width={colum.width || 0}
                  ></col>
                );
              })}
            </colgroup>
            <tbody>
              {list.map((item, index) => {
                let active = item.id === this.props.activeId;
                return (
                  <tr
                    key={item.id}
                    className={classnames("list-table__row", {
                      "list-table__row--striped": index % 2 !== 0,
                      active,
                    })}
                  >
                    {colums.map((colum) => {
                      let columKey = this.getColumName(colum);
                      return (
                        <td className={columKey} key={columKey}>
                          <div className="cell">
                            {this.cellItem(item, colum, active)}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTable;
