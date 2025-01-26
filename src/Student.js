import React from 'react'

const Student = ({name, age, gender}) => {
  return (
    <>
        <div>
            <h3>{name}</h3>
            <p>
                <span>{age}</span>歳
            </p>
            <p>{gender}</p>
            <hr />
        </div>
    </>
  );
}

export default Student