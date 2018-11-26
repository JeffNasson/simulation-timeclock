update punches
set date_punch = $1, days = $2, hours = $3, minutes = $4, am_pm = $5, punch_type = $6
where id = $7;

select * from punches;