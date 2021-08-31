// refer: https://www.udemy.com/course/100-algorithms-challenge/learn/lecture/10528924#overview

const listDomain = ['org', 'com', 'net', 'info']
function getFullDomainName(abbr) {
    switch (abbr) {
        case 'org': return 'organization'
        case 'com': return 'commercial'
        case 'net': return 'network'
        case 'info': return 'infomation'
    
        default: return abbr
    }

}
function domainType(domains) {
    let result = []
    domains.map(domain => {
        const currentDomain = domain.split('.')
        const labelDomain = getFullDomainName(currentDomain[currentDomain.length - 1])
        result.push(labelDomain)
    })
    return result
}
const domains = ['en.wiki.org', 'codefights.com', 'happy.net', 'code.info']
console.log(domainType(domains))
// ['organization', 'commercial', 'network', 'infomation']