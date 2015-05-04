var result = {};
var fs = require('fs');
var origin = require('./NormalWordFrequent');

var pa = ['b', 'c', 'ch', 'd', 'dd', 'g', 'gh', 'gi', 'h', 'kh', 'l', 'm', 'n', 'ng', 'nh', 'p', 'ph', 'qu', 'r', 's', 't', 'th', 'v', 'x', 'y'];
var pac = ['c', 'ch', 'm', 'n', 'ng', 'nh', 'p', 't', 'y'];
var na = [
	'a', 'as', 'af', 'ar', 'ax', 'aj',
	'au', 'asu', 'afu', 'aru', 'axu', 'aju',
	'ao', 'aso', 'afo', 'aro', 'axo', 'ajo',
	'ai', 'asi', 'afi', 'ari', 'axi', 'aji',
	'ay', 'asy', 'afy', 'ary', 'axy', 'ajy',
	'aw', 'aws', 'awf', 'awr', 'awx', 'awj',
	'aa', 'aas', 'aaf', 'aar', 'aax', 'aaj',
	'aau', 'aasu', 'aafu', 'aaru', 'aaxu', 'aaju',
	'aay', 'aasy', 'aafy', 'aary', 'aaxy', 'aajy',
	
	'u', 'us', 'uf', 'ur', 'ux', 'uj',
	'ua', 'usa', 'ufa', 'ura', 'uxa', 'uja',
	'uaa', 'uaas', 'uaaf', 'uaar', 'uaax', 'uaaj',
	'uoo', 'uoos', 'uoof', 'uoor', 'uoox', 'uooj',
	'uow', 'uows', 'uowf', 'uowr', 'uowx', 'uowj',
	'uee', 'uees', 'ueef', 'ueer', 'ueex', 'ueej',
	'ui', 'usi', 'usi', 'uri', 'uxi', 'uji',
	'uy', 'usy', 'usy', 'ury', 'uxy', 'ujy',
	'uya', 'uysa', 'uyfa', 'uyra', 'uyxa', 'uyja',
	'uooi', 'uoosi', 'uoofi', 'uoori', 'uooxi', 'uooji',
	'uyee', 'uyees', 'uyeef', 'uyeer', 'uyeex', 'uyeej',
	'uay',
	'uyu', 'uysu', 'uyfu', 'uyru', 'uyxu', 'uyju',
	
	'uw', 'uws', 'uwf', 'uwr', 'uwx', 'uwj',
	'uwa', 'uwsa', 'uwfa', 'uwra', 'uwxa', 'uwja',
	'uwi', 'uwsi', 'uwfi', 'uwri', 'uwxi', 'uwji',
	'uwu', 'uwsu', 'uwfu', 'uwru', 'uwxu', 'uwju',

	'uow', 'uows', 'uowf', 'uowr', 'uowx', 'uowj',
	'uowi', 'uowsi', 'uowfi', 'uowri', 'uowxi', 'uowji',
	'uowu', 'uowsu', 'uowfu', 'uowru', 'uowxu', 'uowju',
	
	'o', 'os', 'of', 'or', 'ox', 'oj',
	'oa', 'osa', 'ofa', 'ora', 'oxa', 'oja',
	'oaw', 'oaws', 'oawf', 'oawr', 'oawx', 'oawj',
	'oo', 'oos', 'oof', 'oor', 'oox', 'ooj',
	'oi', 'osi', 'ofi', 'ori', 'oxi', 'oji',
	'oe', 'oes', 'oef', 'oer', 'oex', 'oej',

	'ooi', 'oosi', 'oofi', 'oori', 'ooxi', 'ooji',
	'ow', 'ows', 'owf', 'owr', 'owx', 'owj',
	'owi', 'owsi', 'owfi', 'owri', 'owxi', 'owji',
	
	'e', 'es', 'ef', 'er', 'ex', 'ej',
	'eo', 'eso', 'efo', 'ero', 'exo', 'ejo',
	'ee', 'ees', 'eef', 'eer', 'eex', 'eej',
	'eeu', 'eesu', 'eefu', 'eeru', 'eexu', 'eeju',
	'i', 'is', 'if', 'ir', 'ix', 'ij',
	'iu', 's', 'f', 'r', 'x', 'j',
	'', 's', 'f', 'r', 'x', 'j',


];

for (var i = 0, n = origin.length; i < n; i++) {

}