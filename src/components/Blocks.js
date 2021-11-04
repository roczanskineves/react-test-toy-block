
import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import Loading from "./Loading";
import { withStyles } from '@material-ui/styles';


const useStyles = theme => ({
    main: {
        width: "100%",
        display: "block"
    },
    div: {
        boxSizing: "border-box",
        width: "100%",
        background: "#ddd",
        marginBottom: "5px",
        padding: "8px",
        borderRadius: "2px"
    },
    small: {
        color: "#0000FF",
        letterSpacing: "2px",
        fontSize: "11px",
        fontWeight: "bold"
    },
    h3: {
        fontSize: "13px",
        margin: "0",
        fontWeight: "normal",
        color: "#333"
    }
});

class Blocks extends Component {
    
    render() {
        const { classes } = this.props;

        return(
            this.props.loading ? (
                <Loading />
            ) : (
                this.props.node.length > 0 ? (
                    <div className={classes.main}>
                        {this.props.node.map((node) => {
                            return (
                                <div key={node.id} className={classes.div}>
                                    <Typography
                                    variant="subtitle1"
                                    className={classes.small}
                                    >
                                        {('000'+node.id).substring(node.id.length)}
                                    </Typography>
                                    <Typography
                                    variant="subtitle1"
                                    className={classes.h3}
                                    >
                                    {node.attributes.data}
                                    </Typography>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <Typography
                    variant="subtitle1"
                    component="p"
                    >
                        There's no blocks to load
                    </Typography>
                )
            )
        )
    }

};

Blocks.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Blocks);