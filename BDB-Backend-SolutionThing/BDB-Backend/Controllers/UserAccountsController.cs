using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BDB_Backend.Models;
using Microsoft.AspNetCore.Identity;

// This handles most API requests to the server about User Accounts
// so if the front end accesses https://<ip>:<port>/UserAccounts in different ways,
// different things will happen (get, post, delete http requests)
namespace BDB_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserAccountsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        private readonly PasswordHasher<User> thing = new PasswordHasher<User>();

        public UserAccountsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/UserAccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetuserAccounts()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/UserAccounts/<any existing user id>
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserAccount(int id)
        {
            var userAccount = await _context.Users.FindAsync(id);

            if (userAccount == null)
            {
                return NotFound();
            }

            return userAccount;
        }

        // PUT: api/UserAccounts/<any user id>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserAccount(int id, User userAccount)
        {
            if (id != userAccount.UserID)
            {
                return BadRequest();
            }

            _context.Entry(userAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserAccounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUserAccount(User userAccount)
        {
            userAccount.Password = thing.HashPassword(userAccount, userAccount.Password);
            _context.Users.Add(userAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserAccount", new { id = userAccount.UserID }, userAccount);
        }

        // DELETE: api/UserAccounts/<any existing user id>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserAccount(int id)
        {
            var userAccount = await _context.Users.FindAsync(id);
            if (userAccount == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userAccount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserAccountExists(int id)
        {
            return _context.Users.Any(e => e.UserID == id);
        }
    }
}
