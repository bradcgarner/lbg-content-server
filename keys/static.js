'use strict';

const commonSc = [
  // these are keys that exist in at least 2 tables
  // generally try to limit use of common keys; use unique keys to the extent practical
  // we prefix common keys in SQL statements to differentiate tables
  'id'	,										
  'timestamp_created'	,
  'timestamp_thick',							
  'timestamp_cr6',	

  'id_user',							
  'id_profile',	
  'id_platform'	,										
  'id_cassette'	,		
  'id_thickness',		
  'id_user_locked',										
  'id_weatherEvent'	,		
  'id_pore_agg',

  'event_num',										
  'event_rain',

  'notes',										
  'locked',										
  'active',
  'links',									
  'captions',								
  'error_level',		
  'transcribed',										
  'analysis',

  'astm_dry_lbs_sf'	,		'dry_kg_m2',								
  'astm_max_lbs_sf'	,   'fc_kg_m2',							
  'astm_dry_lbs_cf'	,   'dry_kg_m3',	
  'astm_max_lbs_cf'	,   'fc_kg_m3',	
  'sat_lbs_cf',         'sat_kg_m3',
  'sat_lbs_sf',         'sat_kg_m2',
  'media_cf_sf',        'media_m3_m2',							
  'thickness_in',       'thickness',		
  'size_sf',            'size_m2',
  'total_ci',	          'total_l',			

  'slope',	
  'runoff_rate_peak_mm_min',
  'runoff_rate_sheet_peak_kg_min',
  'runoff_rate_trans_peak_kg_min',
];
	

module.exports = { 
  commonSc,
};	
