import React, { useEffect } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAthletes } from "../actions/athletes";

import useStyles from "./styles";

const Paginate = ({ page }) => {
    const  {numberOfPages}  = useSelector((state) => state.athletes);

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        if (page) dispatch(getAthletes(page));
    }, [page]);
    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem
                    {...item}
                    component={Link}
                    to={`/athletes?page=${item.page}`}
                />
            )}
        />
    );
};

export default Paginate;
