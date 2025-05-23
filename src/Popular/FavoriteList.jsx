import React from 'react'
import FavoriteCard from './FavoriteCard';

function FavoriteList({ like }) {
    return (
        <div>
            {like.length > 0 ? (like.map(item => (<FavoriteCard key={item.id} data={item} />))
            ) : 
            (
                <p style={{ textAlign: "center", fontSize: "20px", padding: "20px", color: "#DBDBDB", margin: "0 auto" }}> No Favorites </p>
            )}
        </div>
    );
  )
}

export default FavoriteList