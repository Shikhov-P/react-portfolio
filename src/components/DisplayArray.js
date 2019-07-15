import React from 'react';

// function Skills(props) {
//     function listItems() {
//         let list = [];
//         props.array[1].forEach((item) => {
//             list.push(<li className={'list-item'}>{item}</li>);
//         });
//         return list;
//     }
//
//     return (
//         <Grid>
//             <Cell col={2}>
//                 <p>{props.array[0]}</p>
//             </Cell>
//
//             <Cell col={9}>
//                 <ul className={'unordered-list'}>
//                     {listItems()}
//                 </ul>
//             </Cell>
//         </Grid>
//     )
// }

function DisplayArray(props) {
    let list = [];
    props.array.forEach((item) => {
        list.push(<li className={'list-item'}>{item}</li>);
    });
    console.log(list);
    return <ul className="unordered-list">{list}</ul>;
}

export default DisplayArray;