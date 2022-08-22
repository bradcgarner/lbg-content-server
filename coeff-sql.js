'use strict';

const getTestsJoinsValuesSql = where => {
  const whereText = typeof where === 'string' ? `${where} and omit is not true` : 'where omit is not true;' ;

  return `select tests_joins_values.id, 
  tests_joins_values.timestamp_created, 
  profile_code, 
  join_type, 
  id_join, 
  tests_joins.id_test_lo, 
  tests_joins.id_test_hi,
  names_versions, 
  tests_joins_values.notes,
  value
  from tests_joins_values
  left join tests_joins on id_join = tests_joins.id ${whereText};`;
};

module.exports = {
  getTestsJoinsValuesSql,
};