/**
 * Get url from srcset with largest pixel density
 * @param srcsetItems
 * @returns {string}
 */
export function getLargestSrcsetItem(srcsetItems) {
	let largestItem = '';
	let largestPixelDensity = 1;

	for (let srcset of srcsetItems) {
		if (srcset.density > largestPixelDensity) {
			largestItem = srcset;
			largestPixelDensity = srcset.density;
		}
	}
	return largestItem;
}

/**
 * Wikipedia can serve the image in various sizes depending on the url
 * I.e. https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Denmark-Norway_and_possessions.png/642px-Denmark-Norway_and_possessions.png
 * produces an image with 642px in width
 * @param src
 * @param width
 * @returns {*}
 */
export function wikiGetSpecificWidthSrc(src, width) {
	// Cannot use `*` quantifier inside a lookbehind, so extra search
	if (src.includes('upload.wikimedia.org')) {
		return src.replace(
			/(?<=upload\.wikimedia\.org.*\/)(\d+)(?=px-)/,
			width
		);
	}
	return src;
}
