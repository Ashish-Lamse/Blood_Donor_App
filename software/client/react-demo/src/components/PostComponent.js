/**
 * Created by sb0103 on 19/9/17.
 */
import React, { Component, PropTypes } from 'react'
import {PanelGroup,Panel,Col,Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap'
import CommentsComponent from './CommentComponent';


class PostComponent extends Component {
    ADD_COMMENT(){
        console.log("Add comment here");
    }

    render() {
        return (
            <PanelGroup defaultActiveKey="1" accordion>
                <Panel header={this.props.data.firstName}>
                    <Form horizontal >
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.firstName}</Col>
                            <Col sm={2}></Col>
                            <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.lastName}</Col>
                        </FormGroup>

                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>Email Id</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.email}</Col>
                            <Col sm={2}></Col>
                            <Col componentClass={ControlLabel} sm={2}>Blood Group</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.bloodGroup}</Col>
                        </FormGroup>

                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>City</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.city}</Col>
                            <Col sm={2}></Col>
                            <Col componentClass={ControlLabel} sm={2}>comments..</Col>

                            <Col sm={2}>
                                <FormControl type="text" placeholder="Add comment"/>

                                {this.props.data.comments.map((comment, i) => <CommentsComponent
                                    key = {i} commentData = {comment}/>)}

                            </Col>
                        </FormGroup>

                        <Button type="button" className="pull-right" bsStyle="default" bsSize="small"  onClick={ () => this.ADD_COMMENT() }>
                            Add Comment
                        </Button>
                    </Form>
                </Panel>
            </PanelGroup>
        );
    }
}

export default PostComponent;

