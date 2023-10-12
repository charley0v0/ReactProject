export default function about() {
    function showName() {
        alert('my name is Charley');
    }

    return (
        <div>
            <button onClick={showName}>show name</button>
        </div>
    );
}