export default function replaceTags(document, rootDocument, ofType, withType) {
	Array.from(
		document.querySelectorAll(`
			section ${ofType}
		`)
	).forEach(el => {
		let new_el = rootDocument.createElement(withType);
		new_el.innerHTML = el.innerHTML;
		el.parentNode.replaceChild(new_el, el);
	});
}
