const fs=require('node:fs/promises')
const path=require('path')

fs.mkdir(path.join('lesson1'),(err)=>{
    if (err) throw Error();
})
const worker = async ()=>{
    try{
    const fileNames=['ls1.txt', 'ls2.txt','ls3.txt','ls4.txt','ls5.txt'];
    const folderNames=['L1','L2','L3','L4','L5',];

    for (const folderName of folderNames) {
        await fs.mkdir(path.join('lesson1', folderName), {recursive: true});
    }
    for (const fileName of fileNames){
        await fs.writeFile(path.join('lesson1', fileName), 'Hello');
    }
        const files = await fs.readdir(path.join('lesson1'));
        for (const file of files) {
      const stats = await fs.stat(path.join('lesson1', file));
      const isFile = stats.isFile();

    if (isFile) {
        console.log('Thi is file:', path.join('lesson1', file));
    }else {
        console.log('Thi is folder:', path.join('lesson1', file));
    }}

    const data = await fs.readdir(path.join('lesson1'), {withFileTypes: true});
    data.forEach(file => {
        console.log(file.isFile());
    });

    }catch (e){
        console.log(e.message);
    }

}

worker().then();