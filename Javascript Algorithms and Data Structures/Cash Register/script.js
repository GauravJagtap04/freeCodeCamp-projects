const cash = document.querySelector("#cash");
const changeDue = document.querySelector("#change-due");
const purchaseBtn = document.querySelector("#purchase-btn");
const total = document.querySelector("#total");
const priceDiv = document.querySelector("#price");
const changeInDrawer = document.querySelector("#change-in-drawer");

let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const currencyMap = new Map([
  ["ONE HUNDRED", 100],
  ["TWENTY", 20],
  ["TEN", 10],
  ["FIVE", 5],
  ["ONE", 1],
  ["QUARTER", 0.25],
  ["DIME", 0.1],
  ["NICKEL", 0.05],
  ["PENNY", 0.01],
]);

let price = 3.26;
let drawerTotal = 0;

const updateDrawerTotal = () => {
  drawerTotal = Number(cid.reduce((a, b) => a + b[1], 0).toFixed(2));
  total.innerHTML = `
    Drawer Total: $${drawerTotal};
  `;
};

const updateChangeInDrawer = () => {
  changeInDrawer.innerHTML = "";
  for (let [key, value] of cid) {
    changeInDrawer.innerHTML += `
      ${key}: $${value.toFixed(2)}<br>
    `;
  }
};

const updateStatus = (drawerTotal, returnVal) => {
  if (drawerTotal === 0 && returnVal === 0) {
    return `<span>Status: CLOSED</span>`;
  } else if (returnVal > drawerTotal) {
    return `<span>Status: INSUFFICIENT_FUNDS</span>`;
  } else {
    return `<span>Status: OPEN</span>`;
  }
};

const cashier = (el) => {
  changeDue.innerHTML = "";

  let value = Number(el);
  let returnVal = Number((value - price).toFixed(2));
  let tcg = 0;

  if (!value) {
    alert("Please enter some value");
    return;
  } else if (value < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (value === price) {
    changeDue.innerHTML = `
      <span>No change due - customer paid with exact cash<span>
    `;
    return;
  }

  for (let [key, val] of currencyMap) {
    if (returnVal === 0) break;

    let cidEntry = cid.find((item) => item[0] === key);
    let availableAmount = Number(cidEntry[1].toFixed(2));

    if (returnVal >= val && availableAmount > 0) {
      let unitsToGive = Math.floor(returnVal / val);
      let amountToReturn = Math.min(unitsToGive * val, availableAmount);

      returnVal = Number((returnVal - amountToReturn).toFixed(2));
      tcg += amountToReturn;
      cidEntry[1] = Number((cidEntry[1] - amountToReturn).toFixed(2));

      changeDue.innerHTML += `
      ${key}: $${amountToReturn.toFixed(2)}<br>
      `;
    }
  }

  updateDrawerTotal();

  let statusStr = updateStatus(drawerTotal, returnVal);

  if (returnVal > 0) {
    changeDue.innerHTML = `<span>Status: INSUFFICIENT_FUNDS</span>`;
    return;
  }

  updateChangeInDrawer();
  changeDue.innerHTML = statusStr + changeDue.innerHTML;
};

updateDrawerTotal();
updateChangeInDrawer();

priceDiv.innerHTML = `
  <span>Price: $${price}</span><br>
`;

purchaseBtn.addEventListener("click", () => cashier(cash.value));

cash.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    purchaseBtn.click();
  }
});
