// Some Windows sandboxes cannot resolve os.userInfo(), which tsx uses only to
// name its temporary cache. Provide a process-local cache label for generation.
const os=require('node:os');
const original=os.userInfo;
os.userInfo=function(...args){try{return original.apply(os,args)}catch(error){if(error.code!=='ERR_SYSTEM_ERROR')throw error;return {username:'asenso-build',uid:-1,gid:-1,homedir:os.homedir(),shell:null}}};
process.env.TMP=process.cwd()+'/.sites-runtime/tmp';
process.env.TEMP=process.env.TMP;
require('node:fs').mkdirSync(process.env.TMP,{recursive:true});
process.argv=['node','drizzle-kit','generate'];
require('../node_modules/drizzle-kit/bin.cjs');
