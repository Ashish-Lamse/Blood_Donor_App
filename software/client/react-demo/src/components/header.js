import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {Nav, Navbar, NavItem,Button, NavDropdown, MenuItem, Grid, Row, Col} from 'react-bootstrap'
import { POPUP_CHECK_BOOLEANVALUE } from '../actions/actions'
import {NEW_DONAR_REGISTERED_DATA,USER_REQUEST_DATA,SEARCH_DATA, COMMENT_BOOLEAN_CHECK, RECENT_DONAR,POST_REQUEST_BOOLEAN } from '../actions/actions'

import moment from 'moment'

@autobind
class Header extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount () {
        let donar1=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Rama',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Rama@gmail.com',
            'p_phone':'1111111111',
            'e_email':'Rama@gmail.com',
            'e_phone':'1111111111',
            'bloodGroup':'A+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donar2=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Shyama',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Shyama@gmail.com',
            'p_phone':'2222222222',
            'e_email':'Shyama@gmail.com',
            'e_phone':'2222222222',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donar3=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Pravya',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Pravya@gmail.com',
            'p_phone':'3333333333',
            'e_email':'Pravya@gmail.com',
            'e_phone':'3333333333',
            'bloodGroup':'B+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donar4=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Sumya',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Sumya@gmail.com',
            'p_phone':'4444444444',
            'e_email':'Rama@gmail.com',
            'e_phone':'4444444444',
            'bloodGroup':'O+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donar5=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Deva',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Rama@gmail.com',
            'p_phone':'5555555555',
            'e_email':'Deva@gmail.com',
            'e_phone':'5555555555',
            'bloodGroup':'AB-',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        }
        let donar6=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Munna',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Munna@gmail.com',
            'p_phone':'6666666666',
            'e_email':'Munna@gmail.com',
            'e_phone':'6666666666',
            'bloodGroup':'AB+',
            'city':'Puna',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        };
        let donar7=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Sumit',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Sumit@gmail.com',
            'p_phone':'1111111111',
            'e_email':'Sumit@gmail.com',
            'e_phone':'7777777777',
            'bloodGroup':'AB-',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': undefined,
            'end_date': undefined
        };

        let { dispatch } =this.props;
        dispatch(NEW_DONAR_REGISTERED_DATA(donar1));
        dispatch(SEARCH_DATA(donar1));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar2));
        dispatch(SEARCH_DATA(donar2));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar3));
        dispatch(SEARCH_DATA(donar3));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar4));
        dispatch(SEARCH_DATA(donar4));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar5));
        dispatch(SEARCH_DATA(donar5));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar6));
        dispatch(SEARCH_DATA(donar6));
    }
    render() {

        let { dispatch } =this.props;
        let boolval = false;
        let temp = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
        dispatch(COMMENT_BOOLEAN_CHECK(boolval));
        dispatch(RECENT_DONAR(temp));
        dispatch(POST_REQUEST_BOOLEAN(temp));

        return (
            <div >
                <Navbar inverse collapseOnSelect>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to='/search'>
                                <NavItem eventKey={1} href="#">Search</NavItem>
                            </LinkContainer>

                            <LinkContainer to='/registerDonor'>
                                <NavItem eventKey={2} href="#">registerDonor</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid>
                    <Row className="show-grid">
                        <Col md={10} mdPush={1}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

Header.propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.object
};

Header.defaultProps={
    dispatch :  () => {}
};

function selectProps (state) {
    return {
    }
}

export default connect(selectProps) (Header)
