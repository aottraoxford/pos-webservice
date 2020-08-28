import Container from 'typedi'

export default (models: {name: string, model: any}[]) => {
    models.forEach(m => {
        Container.set(m.name, m.model)
    })
}
