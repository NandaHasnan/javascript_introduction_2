const name = [
    'Abigail', 'Alexandra', 'Alison', 'Amanda', 
    'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 
    'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

const SearchName = (search, limit, callback) => {
    const NameFilter = name.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );
      
    return callback(NameFilter, limit);
    };
      
    const limitData = (NameFilter, limit) => NameFilter.slice(0, limit);
      
    console.log(SearchName("an", 3, limitData));

    