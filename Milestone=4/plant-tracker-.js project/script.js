let thrivingList = [];
let strugglingList = [];

let filterSection = document.getElementById('filtered-section')

const allCards = document.getElementById("allCards");
let thrivingCount = document.getElementById('thrivingCount')
let strugglingCount = document.getElementById('strugglingCount')

//plant show board
const total = document.getElementById("total");
const thrive = document.getElementById("thrivingCount");
const struggling = document.getElementById("strugglingCount");

//toggle btn
const allBtn = document.getElementById("all-filter-btn")
const thrivingBtn = document.getElementById('thriving-filter-btn')
const strugglingBtn = document.getElementById('struggling-filter-btn')
function toggleStyle(id) {
    allBtn.classList.remove("bg-black", "text-white")
    thrivingBtn.classList.remove("bg-black", "text-white")
    strugglingBtn.classList.remove("bg-black", "text-white")

    allBtn.classList.add("bg-gray-300", 'text-black')
    thrivingBtn.classList.add("bg-gray-300", 'text-black')
    strugglingBtn.classList.add("bg-gray-300", 'text-black')

    let clickBtn = document.getElementById(id);

    clickBtn.classList.remove("bg-gray-300", 'text-black')
    clickBtn.classList.add("bg-black", "text-white")

    if (id == 'thriving-filter-btn') {
        allCards.classList.add('hidden')
        filterSection.classList.remove('hidden')

    }
    else if (id == 'all-filter-btn') {
        allCards.classList.remove('hidden')
        filterSection.classList.add('hidden')

    }

}


//dashboard count

function countPlant() {
    total.innerText = allCards.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
}
countPlant()

//-------------------------------------------------------------------------

let mainContainer = document.querySelector('main')


//delegation---->
mainContainer.addEventListener('click', function (event) {

    if (event.target.classList.contains('thriving-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode)
        let plantName = parentNode.querySelector('.plantName').innerText
        let latinName = parentNode.querySelector('.latinName').innerText
        let light = parentNode.querySelector('.light').innerText
        let water = parentNode.querySelector('.water').innerText
        let status = parentNode.querySelector('.status').innerText
        let notes = parentNode.querySelector('.notes').innerText

        parentNode.querySelector('.status').innerText = 'Thrive'

        let cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status,
            notes
        }
        //console.log(cardInfo);
        const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName)
        //console.log(plantExist)

        if (!plantExist) {
            thrivingList.push(cardInfo)
        }
        //console.log(thrivingList)
        renderThriving();
    }

})

function renderThriving() {
    filterSection.innerHTML=''
    for (let thrive of thrivingList) {
        let div = document.createElement('div');
        div.className = 'card flex justify-between border p-8 '
        div.innerHTML = `
            <div class="space-y-6 ">
                    <!-- part 1 -->
                    <div>
                        <p class="plantName text-4xl">${thrive.plantName}</p>
                        <p class="latinName">Latin Name</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2">
                        <p class="light bg-gray-200 px-5">Bright Indicate</p>
                        <p class="water bg-gray-200 px-5">weekly</p>
                    </div>
                    <!-- part 3 -->
                    <p class="status">${thrive.status}</p>
                    <p class="notes">New leaf unfurling by the east window.</p>

                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
                <!-- main part 2 -->
                <div>
                    <button class="btn-delete bg-red-200 text-red-600 px-4 py-2">Delete</button>
                </div>
            </div>
    `
        filterSection.appendChild(div)
    }
}


