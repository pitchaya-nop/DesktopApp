<template>
  <div class="col-sm-12">
    <div class="blog-contact blog-card">
      <h3>Leave Your Comment</h3>
      <form class="default-form">
        <div class="row">
          <div class="col-md-4 col-sm-4 mt-3">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Enter Your name"
                required=""
              />
            </div>
          </div>
          <div class="col-md-4 col-sm-4 mt-3">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                class="form-control"
                id="email"
                type="text"
                placeholder="Email"
                required=""
              />
            </div>
          </div>
          <div class="col-md-4 col-sm-4 mt-3">
            <div class="form-group">
              <label for="emailid">Website</label>
              <input
                class="form-control"
                id="emailid"
                type="text"
                placeholder="Website"
                required=""
              />
            </div>
          </div>
          <div class="col-12 mt-3">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comment</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Write Your Comment"
                rows="6"
              ></textarea>
            </div>
            <div class="form-group">
              <a class="btn btn-primary" href="javascript:void(0)">Post Comment</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

