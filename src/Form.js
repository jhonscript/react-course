export function MyForm() {
    return <form onSubmit={(event) => { event.preventDefault(); console.log(event); }}>
        <h1>Registro de usuario</h1>
        <button>Send</button>
    </form>
}