﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PolicyManagement.Models;

namespace PolicyManagement.Controllers
{
    public class PoliciesController : ApiController
    {
        private PolicyManagementEntities db = new PolicyManagementEntities();

        // GET: api/Policies
        public IQueryable<Policy> GetPolicies()
        {
            return db.Policies;
        }

        // GET: api/Policies/5
        [ResponseType(typeof(Policy))]
        public IHttpActionResult GetPolicy(string id)
        {
            Policy policy = db.Policies.Find(id);
            if (policy == null)
            {
                return NotFound();
            }

            return Ok(policy);
        }

        // PUT: api/Policies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPolicy(string id, Policy policy)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != policy.Id)
            {
                return BadRequest();
            }

            db.Entry(policy).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PolicyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Policies
        [ResponseType(typeof(Policy))]
        public IHttpActionResult PostPolicy(Policy policy)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Policies.Add(policy);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PolicyExists(policy.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = policy.Id }, policy);
        }

        // DELETE: api/Policies/5
        [ResponseType(typeof(Policy))]
        public IHttpActionResult DeletePolicy(string id)
        {
            Policy policy = db.Policies.Find(id);
            if (policy == null)
            {
                return NotFound();
            }

            db.Policies.Remove(policy);
            db.SaveChanges();

            return Ok(policy);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PolicyExists(string id)
        {
            return db.Policies.Count(e => e.Id == id) > 0;
        }
    }
}