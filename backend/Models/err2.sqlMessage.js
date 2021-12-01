err2.sqlMessage;

`Select sum(total) as Total From tran t where t.payment_due = 1 and tran_date >= '${from}' and tran_date <='${to}';`;
