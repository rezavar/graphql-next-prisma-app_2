'use client'
import React from 'react';
import {Card, CardActions, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {BookMarkButton} from "@/components/muiStyled/buttons";
import { useQuery } from "@apollo/client";
import {GET_LINKS} from "@/constants/gql/query/link";

function Products() {

    const { data, loading, error } = useQuery(GET_LINKS);

    if (loading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در بارگذاری: {error.message}</p>;

    console.log(data,typeof data)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
            {
                data.links.map((link)=>{
                    return (
                        <Card sx={{ maxWidth: 345 , width:'100%'}} key={link.id}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={link.imageUrl}
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {link.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {link.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <BookMarkButton>+ bookmark</BookMarkButton>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </div>
    );
}

export default Products;