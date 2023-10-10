export function construct(list, container, itemrenderer) {
    const ListRenderer = {
    container: document.querySelector(container),
    itemrenderer: itemrenderer,
        render() {
            this.container.innerHTML = "";
            for(const member of list) {
                const html = this.itemrenderer.render(member)
                this.container.insertAdjacentHTML("beforeend", html);
            }
        }
    }
    return ListRenderer;
}