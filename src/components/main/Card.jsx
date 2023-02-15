
export const Card = function (props) {
    return (
        <div className = 'round'>
          <img className = 'popular' src = {props.picture_link}/>
          <div className = 'genre'>{props.name}</div>
        </div>
    )
}