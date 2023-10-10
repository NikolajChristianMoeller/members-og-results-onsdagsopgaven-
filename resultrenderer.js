export const ResultRenderer = {
    render(result) {
    let name = "";
    if (result.member !== undefined) {
        name = result.member.name;
    } else {
        name = "ukendt medlem";
    }

    let træningellerstævne = "";
    if(result.isTraining) {
        træningellerstævne = "træning";
    } else {
        træningellerstævne = "stævne";
    }

    const html = /*html*/ `
    <tr>
      <td>${result.date.toLocaleString("da", {
          weekday: "short", month: "short", day: "numeric", year: "numeric"
      })}</td>
      <td>${result.member?.name ?? "- Ukendt medlem -"}</td>
      <td>${disciplines[result.discipline]}</td>
      <td>${result.isTraining ? "træning" : "stævne"}</td>
      <td>${result.getTimeString()}</td>
    </tr>`;

        return html;
    }
}

const disciplines = {
    breaststroke: "bryst",
    butterfly: "butterfly",
    backstroke: "ryg",
    freestyle: "freestyle"
}