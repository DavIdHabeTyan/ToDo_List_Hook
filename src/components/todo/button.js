import React from 'react';

export function SearchInput ({handleSearchList}) {


    return (
        <div>
            <form action="">
            <input

                placeholder={"search..."}
                type="text"
                onChange={(e)=>handleSearchList(e)}
            />
            </form>
        </div>
    );
}

