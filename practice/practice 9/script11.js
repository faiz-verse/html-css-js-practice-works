const circularSlider = document.querySelector('.circularSlider');
const listItems = document.querySelectorAll('.menu li');
const itemImg = document.querySelector('.itemImg');
const itemInfo = document.querySelector('.itemInfo p');
const itemPrice = document.querySelector('.itemInfo b');

let currentRotation = 0; // Tracks the current rotation

listItems.forEach((listItem) => {
    listItem.addEventListener('click', () => {
        const targetIndex = parseInt(listItem.getAttribute('data-index')) - 1; // Convert to 0-based index
        const totalItems = listItems.length;

        // Calculate the angle for the target item
        const anglePerItem = 360 / totalItems;
        const targetAngle = targetIndex * anglePerItem;

        // Calculate the current top item's index
        const currentIndex = Math.round(-currentRotation / anglePerItem) % totalItems;

        // If the clicked item is already at the top, do nothing
        if (currentIndex === targetIndex) return;

        // Calculate the rotation to align the target at the top (0deg)
        const rotationNeeded = -targetAngle - currentRotation;

        // Update the total rotation
        currentRotation += rotationNeeded;

        // Apply the rotation
        circularSlider.style.transform = `rotate(${currentRotation}deg)`;

        if(targetIndex == 0){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/3926121/pexels-photo-3926121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "Chow mein is a Chinese stir-fried noodle dish featuring vegetables and optional proteins like meat or tofu, seasoned with soy sauce and aromatics.";
            itemPrice.innerHTML = "Price: ₹100";
        }
        else if(targetIndex == 1){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/5848599/pexels-photo-5848599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
            itemInfo.innerHTML = "Peking Duck is a traditional Chinese dish known for its crispy, thin skin and tender roasted duck meat, served with pancakes, spring onions, cucumber, and hoisin sauce.";
            itemPrice.innerHTML = "Price: ₹1,500";
        }
        else if(targetIndex == 2){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/12052350/pexels-photo-12052350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "Chicken Fried Rice is a classic Asian dish made with stir-fried rice, tender chicken pieces, vegetables, eggs, and soy sauce, offering a flavorful and savory taste.";
            itemPrice.innerHTML = "Price: ₹100";
        }
        else if(targetIndex == 3){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/29865873/pexels-photo-29865873/free-photo-of-colorful-mediterranean-platter-with-dips.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "Kung Pao Chicken is a spicy, stir-fried Chinese dish featuring diced chicken, peanuts, vegetables, and chili peppers, tossed in a tangy, savory sauce.";
            itemPrice.innerHTML = "Price: ₹250";
        }
        else if(targetIndex == 4){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/20943933/pexels-photo-20943933/free-photo-of-close-up-of-a-person-eating-a-meal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "A spicy Sichuan dish with tofu, ground meat, and a bold sauce made from fermented bean paste, soy sauce, and Sichuan peppercorns.";
            itemPrice.innerHTML = "Price: ₹300";
        }
        else if(targetIndex == 5){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/3926123/pexels-photo-3926123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "Steamed or fried dumplings filled with vegetables, chicken, or pork, often served with a spicy dipping sauce. A popular snack in Nepal and Tibet.";
            itemPrice.innerHTML = "Price: ₹80";
        }
        else if(targetIndex == 6){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/6645917/pexels-photo-6645917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "Crispy rolls filled with vegetables or meat, either fried or fresh, and served with a tangy dipping sauce. Popular in Chinese and Southeast Asian cuisines.";
            itemPrice.innerHTML = "Price: ₹90";
        }
        else if(targetIndex == 7){
            itemImg.style.backgroundImage = `url('https://images.pexels.com/photos/6645920/pexels-photo-6645920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`;
            itemInfo.innerHTML = "A Japanese noodle soup with wheat noodles in a flavorful broth, topped with pork, eggs, vegetables, and seasonings like soy sauce and miso.";
            itemPrice.innerHTML = "Price: ₹280";
        }
    });
});
