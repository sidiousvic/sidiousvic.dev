// update(() => {
//   console.log(MOTHERBOARD(), X!.innerHTML);

//   const diff = Diff.diffLines(MOTHERBOARD(), X!.innerHTML);
//   let b: ChildNode | null, a: ChildNode | null;
//   diff.forEach((part: any) => {
//     if (part.added) {
//       a = new DOMParser().parseFromString(
//         part.value.replace(/(\r\n|\n|\r)/gm, ""),
//         "text/xml"
//       ).firstChild;
//     }
//     if (part.removed) {
//       b = new DOMParser().parseFromString(
//         part.value.replace(/(\r\n|\n|\r)/gm, ""),
//         "text/xml"
//       ).firstChild;
//     }
//     if (a && b) {
//       console.log(part.value.replace(/(\r\n|\n|\r\s)/gm, ""));
//       const id = (a as HTMLElement).id;
//       const toBeReplaced = document.getElementById(`${id}`);
//       const replacementClone = (a as HTMLElement).innerHTML;
//       const replacement = b as HTMLElement;
//       console.log(replacement);
//       if (toBeReplaced?.innerHTML === replacementClone) {
//         (toBeReplaced as Element).innerHTML = replacement.innerHTML;
//       }
//     }
//   });
// });
