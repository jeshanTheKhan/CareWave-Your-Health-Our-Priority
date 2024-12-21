document.addEventListener('DOMContentLoaded', () => {
    const profileModal = document.getElementById('profileModal');
    const appointmentModal = document.getElementById('appointmentModal');
    const profileContent = document.getElementById('profileContent');
    const appointmentForm = document.getElementById('appointmentForm');

    // Doctor profiles data
    const doctorProfiles = {
        'john-doe': {
            name: 'Dr. John Doe',
            category: 'Cardiologist',
            degree: 'MD, FACC',
            description: 'Dr. John Doe is a board-certified cardiologist with over 15 years of experience in treating heart-related conditions.',
            image: 'https://etherstaging.com/unitedhospitalapi_beta/public/DoctorProfileImg/2022100509291639572469_2_1614502376_2_Shafique%20Sir_Final%20Image-%203Copy.jpg'
        },
        'jane-smith': {
            name: 'Dr. Jane Smith',
            category: 'Neurologist',
            degree: 'MD, PhD',
            description: 'Dr. Jane Smith is a highly skilled neurologist specializing in the treatment of complex neurological disorders.',
            image: 'https://etherstaging.com/unitedhospitalapi_beta/public/DoctorProfileImg/2022100409521639460553_2_1623228498_2_Dr.%20Afreed%20IMG_4820.jpg'
        },
        'mike-johnson': {
            name: 'Dr. Mike Johnson',
            category: 'Pediatrician',
            degree: 'MD, FAAP',
            description: 'Dr. Mike Johnson is a compassionate pediatrician dedicated to providing comprehensive care for children of all ages.',
            image: 'https://www.squarehospital.com/storage/images/1670918911.png'
        },
        'mike-johnso': {
            name: 'Brig.Gen.Bipul Kumar Sarkar',
            category: 'Orthalogy',
            degree: 'MD, FAAP',
            description: 'Brig.Gen.Bipul Kumar Sarkar is a compassionate Orthalogy dedicated to providing comprehensive care for children of all ages.',
            image: 'https://bangladeshhealthalliance.com/wp-content/uploads/2022/06/Dr.-Bipul-Kumer-Sarker-Eye-Specialist-in-Dhaka.jpg'
        }
    };

    // Show profile modal
    document.querySelectorAll('.profile-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const doctorId = e.target.getAttribute('data-doctor');
            const doctor = doctorProfiles[doctorId];
            profileContent.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}" style="max-width: 300px; border-radius: 8px;">
                <h2>${doctor.name}</h2>
                <p><strong>Category:</strong> ${doctor.category}</p>
                <p><strong>Degree:</strong> ${doctor.degree}</p>
                <p>${doctor.description}</p>
            `;
            profileModal.style.display = 'block';
        });
    });

    // Show appointment modal
    document.querySelectorAll('.appoint-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            appointmentModal.style.display = 'block';
        });
    });

    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            profileModal.style.display = 'none';
            appointmentModal.style.display = 'none';
        });
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === profileModal) {
            profileModal.style.display = 'none';
        }
        if (e.target === appointmentModal) {
            appointmentModal.style.display = 'none';
        }
    });

    // Handle appointment form submission
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Appointment request submitted successfully!');
        appointmentModal.style.display = 'none';
        appointmentForm.reset();
    });
});

