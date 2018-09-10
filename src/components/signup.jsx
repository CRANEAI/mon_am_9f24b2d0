
        import React from 'react';
        import { connect } from 'react-redux';
        import { bindActionCreators } from 'redux';
        import { Row, Col Button } from 'reactstrap';
        
        import {  }  from '../../actions/signupActions.js'; 

        class signupView extends React.Component {
            state = {
                
            }
    
                

            componentDidMount = () => {
                
            }
    
        render() {
            return (
                <Row>
                    <Button className="btn"></Button> 
    
                </Row>
            )   
        }
                   
        mapStateToProps = (state) => {
            
        }
    
        mapDispatchToProps = (dispatch) => {
            return bindActionCreators({ }, dispatch);
        }
    
        export default connect(mapStateToProps, mapDispatchToProps)(signup);
    
        