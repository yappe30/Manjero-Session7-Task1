import React, { Component } from 'react';
import { Container } from "@mui/material";
import { connect } from 'react-redux';
import { TextField, Button } from "@mui/material";
import { onPostEmp } from "../../action";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

class Form extends Component {
    state = {
        name: '',
        designation: '',
        modal: false,
    }


    handleChange = (e) => {
        if (e.target.id === "name") {
            this.validateName(e.target.value);
        }
        if (e.target.id == "designation") {
            this.validateDesignation(e.target.value);
        }
    }

    validateDesignation = (designation) => {
        this.setState({
            designation,
        });

        return true;
    }
    validateName = (name) => {
        this.setState({
            name,
        });
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (
            this.validateName(this.state.name) &&
            this.validateDesignation(this.state.designation)
        ) {

            this.props.onGetEmployee({ ...this.state });

            this.setState({
                name: "",
                designation: "",
                modal: true
            });
        }

    };
    handleClose =() =>{
        this.setState({
            modal: false
        })
    }
    render() {
        return (
            <Container
                maxWidth="sm"
                style={{ textAlign: "center", marginTop: "20px" }}
            >
                <TextField
                    id="name"
                    variant="outlined"
                    label="Name"
                    onChange={this.handleChange}
                    value={this.state.name}
                />
                <p style={{ color: "red" }}></p>
                <TextField
                    id="designation"
                    variant="outlined"
                    label="designation"
                    onChange={this.handleChange}
                    value={this.state.designation}
                />
                <p></p>
                <Button variant="contained" onClick={this.handleSubmit}>
                    Submit
                </Button>

                <Modal
                    open={this.state.modal}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                           Success!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Thank you for registering with us.”
                        </Typography>
                    </Box>
                </Modal>
            </Container>


        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetEmployee: (emp) => dispatch(onPostEmp(emp))
    }
}

export default connect(null, mapDispatchToProps)(Form);