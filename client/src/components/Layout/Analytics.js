import React from "react";
import { Progress } from "antd";

//Total Transactions
const Analytics = ({ allTransaction }) => {
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransaction = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalIncomePercent =
    (totalIncomeTransaction.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransaction.length / totalTransaction) * 100;

  //Total TurnOver
  const totalTurnOver = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnOver = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnOver = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnOverPercent =
    (totalIncomeTurnOver / totalTurnOver) * 100;
  const totalExpenseTurnOverPercent =
    (totalExpenseTurnOver / totalTurnOver) * 100;

  return (
    <>
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transactions : {totalTransaction}
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <h5 style={{ color: "#00b894" }}>
                  Income : {totalIncomeTransaction.length}
                </h5>
                <h5 style={{ color: "#eb4d4b" }}>
                  Expense : {totalExpenseTransaction.length}
                </h5>
              </div>
              <div className="d-flex justify-content-around">
                <Progress
                  type="circle"
                  strokeColor={"#00b894"}
                  className="mx-2 incomeText"
                  percent={totalIncomePercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"#eb4d4b"}
                  className="mx-2"
                  percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total TurnOver : {totalTransaction}
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <h5 style={{ color: "#00b894" }}>
                  Income : {totalIncomeTurnOver}
                </h5>
                <h5 style={{ color: "#eb4d4b" }}>
                  Expense : {totalExpenseTurnOver}
                </h5>
              </div>
              <div className="d-flex justify-content-around">
                <Progress
                  type="circle"
                  strokeColor={"#00b894"}
                  className="mx-2 incomeText"
                  percent={totalIncomeTurnOverPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"#eb4d4b"}
                  className="mx-2"
                  percent={totalExpenseTurnOverPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
