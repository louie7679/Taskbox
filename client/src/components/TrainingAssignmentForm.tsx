import React from "react";

interface TrainingAssignmentFormParameters {
  assigneeOptions: any;
  onSubmit: (
    assigner_id: number,
    assignee_id: number,
    due_date: string,
    link: string
  ) => void;
}

interface TrainingAssignmentFormState {
  assigner_id: number;
  assignee_id: number;
  due_date: string;
  link: string;
}

class TrainingAssignmentForm extends React.Component<
  TrainingAssignmentFormParameters,
  TrainingAssignmentFormState
> {
  constructor(props: TrainingAssignmentFormParameters) {
    super(props);
    this.state = {
      assigner_id: -1,
      assignee_id: -1,
      due_date: "",
      link: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleAssigneeChange = this.handleAssigneeChange.bind(this);
  }

  handleAssigneeChange(event: any) {
    this.setState({ assignee_id: event.target.value });
  }

  handleLinkChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ link: event.target.value });
  }

  handleDueDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ due_date: event.target.value });
  }

  handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    if (this.props.onSubmit != null)
      this.props.onSubmit(
        this.state.assigner_id,
        this.state.assignee_id,
        this.state.due_date,
        this.state.link
      );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Assigner ID:
          <input type="hidden" value={this.state.assigner_id}></input>
        </label>
        <br></br>
        <label>
          Asignee ID:
          <select onChange={this.handleAssigneeChange}>
            {this.props.assigneeOptions.map((assigneeOption: any) => (
              <option key={assigneeOption.id} value={assigneeOption.id}>
                {`${assigneeOption.first_name} ${assigneeOption.last_name}`}
              </option>
            ))}
          </select>
        </label>
        <br></br>
        <label>
          Due Date:
          <br></br>
          <input
            type="date"
            value={this.state.due_date}
            onChange={this.handleDueDateChange}
          />
        </label>
        <br></br>
        <label>
          Link:
          <br></br>
          <input
            type="url"
            value={this.state.link}
            onChange={this.handleLinkChange}
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TrainingAssignmentForm;
