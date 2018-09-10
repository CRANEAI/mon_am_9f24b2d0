
        import React from 'react';
        import { connect } from 'react-redux';
        import { bindActionCreators } from 'redux';
        import { Row, Col  } from 'reactstrap';
        
        import { follow_action, follow_action }  from '../../actions/followingActions.js'; 

        class followingView extends React.Component {
            state = {
                 show_loading_indicator: false
            }
    
            
            send = () => {
                
              },
            follow = (value) => {
                const { follow_action } = this.props
                        
                        follow_action()
                        
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              },
            follow = (value) => {
                const { follow_action } = this.props
                        
                        follow_action()
                        
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }    

            componentDidMount = () => {
                
            }
    
        render() {
            return (
                <Row>
                        
                </Row>
            )   
        }
                   
        mapStateToProps = (state) => {
            return {
                    data: state.following
                
        }
    
        mapDispatchToProps = (dispatch) => {
            return bindActionCreators({ follow_action, follow_action}, dispatch);
        }
    
        export default connect(mapStateToProps, mapDispatchToProps)(following);
    
        