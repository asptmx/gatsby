import React from 'react';
class Forlp1 extends React.Component {

  render(){
    let nos = [1, 2, 3, 4, 5];
 return(
    <ul>
      {nos.map((country) =>
        <li>
          Capital of {country}
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </li>
      )}
    </ul>
  );
}
}
  export default Forlp1;

  /* ASP NOt
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

render(
  <ul>{listItems}</ul>,
);


  /*

render() {
  let for1 =[1,2,3,4,5,6,7,8];
  return(
    for1.map((number) =>
      <li>{number};</li>
    )
    <li>
  );
export default Forlp1;


  /* ASP Working 1

  render() {
    let countries = [
      { name: "India", capital: "Delhi" },
      { name: "Belgium", capital: "Brussels" },
      { name: "France", capital: "Paris" },
      { name: "Greece", capital: "Athens" }
    ];

    return (
      <ul>
        {countries.map(country => (
          <li>
            Capital of {country.name} is {country.capital};
              <img src="https://source.unsplash.com/random/400x200" alt="" />
          </li>
        ))}
      </ul>
    );
  }
}

export default Forlp1;

  /* ASP
  renderMovies(movies) {
      const movieItems = [];
      for (var i=0; i < movies.length; i++) {
          movieItems.push(<Movie movie={movie} />);
      }
      return movieItems;
  }

  render() {
      return (
          <div>
              {
                  this.renderMovies(movies)
              }
          </div>
      )
  }
}
export default Forlp1;

/* ASP

class Forlp extends React.Component {

  function() {
    var buttonListElements = [], // Empty Array
      n = 15,
      i;

    for(i = 0; i < n; i = i + 1) {
      // For each element, push a React element into the array
      buttonListElements.push(
        <li key={i}>Soman<button>{i}</button></li>
      );
    }

  render: return (
      <div>
        <ul>
         {buttonListElements}
        </ul>
      </div>
    );
}
}



  /* ASP 7
  render() {
    // No need to wrap list items in an extra element!
    return [
      // Don't forget the keys :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }

  /* ASP 6
  // Calls the children callback numTimes to produce a repeated component
  function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }

  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }

/* ASP 5
  var indents = [];
  for (var i = 0; i < this.props.level; i++) {
    indents.push(<span className='indent' key={i}></span>);
  }
  return indents;



/* ASP 4
render() {
return(
{for(let i = 0; i<3; i++) {
console.log(i)
}
}
)
}

// ASP 3
/*
  Array apply(null, Array(7)).map(function(item, i) {}

  var MyComponent = React.createClass({
    render:function(){
        return (
            <div>
                {Array.apply(null, Array(7)).map(function(item, i){
                    return (
                      <div>
                          <img src="https://source.unsplash.com/random/400x200" alt="" /> {i}
                      </div>
                    );
                }, this)}
            </div>
        );
    }
});


  // ASP 2
  /*
  render: function() {
      var rows = [];
      for (var i = 0; i < numrows; i++) {
          rows.push(<ObjectRow key={i}/>);
      }

      return (<tbody><img src="https://source.unsplash.com/random/400x200" alt="" />{rows}</tbody>);
  }
  */

  // ASP 1
  /* render() {
      return (
        {
        for(let i = 0; i < 12; i++) {
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        }
      }
      );
    }
    */
