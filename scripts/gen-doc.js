const nuxtSeo = require('../lib/module')

const keys = []
const removeList = new Set([
	'content',
	'id',
	'default',
	'fullId'
])

const getKeys = (input, id = '') => {
	return Object.keys(input).map(key => {
		if (typeof input[key] === 'object') {
			getKeys(input[key], id + key + '.')
		}

		if (!removeList.has(key)) {
			keys.push(id + key)
		}
	})
}

getKeys(nuxtSeo.template)
console.log('`' + keys.join('`, `') + '`')
