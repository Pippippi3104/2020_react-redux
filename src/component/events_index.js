import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import { readEvents } from "../actions";

class EventsIndex extends Component {

  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={ event.id }>
        <td>{ event.id }</td>
        <td>
          <Link to={"/events/" + event.id }>
           { event.title }
          </Link>
        </td>
        <td>{ event.body }</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events });

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
