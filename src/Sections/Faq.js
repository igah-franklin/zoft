const Faqs = () => {
  return (
    <div className="bg-form border-t border-b border-header">
      <div class="w-full md:w-3/5 mx-auto p-8">
        <p className="p-10 text-white">
          <strong>FAQ's</strong>
        </p>
        <div class="shadow-md">
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 leading-normal cursor-pointer text-white"
              for="tab-multi-one"
            >
              How do I enroll ?
            </label>
            <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p class="p-5">
                simply fill all the appropriate areas on the contact form
                corresponding to your track or service choice and we'll get back
                to you. Our customer care representative usually reply swiftly.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 leading-normal cursor-pointer text-white"
              for="tab-multi-two"
            >
              Do yo offer certifications after completion?
            </label>
            <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p class="p-5">
                Yes, but you can only be certified if you have successfully
                completed all projects assigned to you by your instructor.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              class="block p-5 leading-normal cursor-pointer text-white"
              for="tab-multi-three"
            >
              Do I need a prior programming experience to enroll?
            </label>
            <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p class="p-5">
                No, Our program is designed to take you from beginner to
                job-ready—regardless of your background. And now more than ever,
                employers see bootcamp graduates as excellent job candidates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
