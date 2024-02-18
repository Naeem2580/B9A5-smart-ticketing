 
 let count = 1
 let totalPrice = 0;

const allBtn = document.getElementsByClassName('btn');
   
for(const btn of allBtn){
    btn.addEventListener('click', function(){
      
        // set color///
        btn.classList.add('bg-green-500');
        /// set ticket--
          const setTicket = document.getElementById('set-ticket');
          setTicket.innerText = + count;
          count++;
        
         /// ticket price---
         const ticketPrice = document.getElementById('ticket-price');
         const ticket = ticketPrice.innerText;
         const convertTicket = parseInt(ticket);
         document.getElementById('ticket-price').innerText = parseInt(ticket);

         const btnText = btn.innerText;
           
         //// set price---
         const setPrice = document.getElementById('set-price');
         const li = document.createElement('li')
         li.style.display='flex'
         li.style.justifyContent ="space-between"
         const p = document.createElement('p');
         p.innerText = btnText;
         const p2 = document.createElement('p');
         p2.innerText = convertTicket;
         li.appendChild(p)
         li.appendChild(p2)
         setPrice.appendChild(li);
         

         // Add total price--
          totalPrice += convertTicket;
           document.getElementById('total-price').innerText = totalPrice;
  
          //// Grand Total---
         const grandTotal = document.getElementById('grand-total')
         const  grandTotalPrice = grandTotal.innerText;
         const convertGranTotal = parseInt(grandTotalPrice);
        //  console.log(convertGranTotal)

         /// Seats Left---
         const seatsLeft = document.getElementById('seats-left');
         const seatsLeftText = seatsLeft.innerText;
         const convertSeatsLeft = parseInt(seatsLeftText);
         const newSeatsLeft = convertSeatsLeft - 1;
         seatsLeft.innerText = newSeatsLeft;  

         

    })
}

/// Apply Btn----
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function(){
    /// remove Btn--
    
    /// remove---
    showId('apply-btn')

    const inputBox = document.getElementById('input-box').value;
    const input = inputBox.split(' ').join('').toUpperCase();
    console.log(input)
    
    if(input === 'NEW15'){
        //discount---
        const discountElement = document.getElementById('discount-price');
        const discount = totalPrice * 0.15;
        discountElement.innerText = discount;
        

        /// Grand total----
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice - discount;
        document.getElementById('input-box').value = '';

        applyBtn.remove('input-box');
        applyBtn.remove('apply-btn');
        
         

    }else{
        alert('Invalid copupon Code')
    }

})


/////////------------///
function showId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

/// full btn---
const fullBtn = document.getElementById('full-btn');
fullBtn.addEventListener('click', function(){
     
    const addBox = document.getElementById('add-box');
    addBox.classList.remove('hidden');
    addBox.style.marginTop ='-500px'
    addBox.style.marginRight ='350px'
    
})
