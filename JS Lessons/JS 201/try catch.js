try {
    throw 'Saadiqs custom error';
    console.log('something after');
} catch (err){
    console.warn('ERROR LOGGING:', err);
} finally {
    console.log('Executes regardless')
}

console.log('SHOW ME!!!');

