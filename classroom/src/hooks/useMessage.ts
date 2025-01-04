

export function useMessage() {
    function show() {
        console.log("Messagem do meu próprio Hook!")
    }


    return { show }
}