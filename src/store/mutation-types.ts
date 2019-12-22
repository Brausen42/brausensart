export default (() => {
    const MUTATIONS = [
        'SET_ACTIVE_IMAGE'
    ]

    const MUTATION_OBJ = {} as { [key: string]: string }
    MUTATIONS.forEach(mutation => {
        MUTATION_OBJ[mutation] = mutation
    })
    return MUTATION_OBJ
})()