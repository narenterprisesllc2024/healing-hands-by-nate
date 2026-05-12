# Final manual step — nginx vhost + SSL cert

**Why this needs your hands:** the aionui user can't write to `/etc/nginx/` or run `certbot` (no sudo, by design — it's the security boundary). One sudo block from you completes the deploy permanently.

## Architecture (so you know what's happening)

- ✅ DNS wildcard `*.mysoviai.com` → VPS IP (already in place)
- ✅ Coolify deployed the app, container running, host port `127.0.0.1:3501` bound to the container's `:3001`
- ⏳ Need: host nginx vhost that proxies `healinghandsbynate.mysoviai.com` → `127.0.0.1:3501`, plus SSL cert from Let's Encrypt

This matches the same pattern Coolify, Paperclip, and Supabase already use on this VPS.

## The commands (one block, copy-paste)

```bash
sudo cp /opt/aionui/projects/healing-hands-by-nate/nginx-vhost.conf \
        /etc/nginx/sites-available/healinghandsbynate.mysoviai.com && \
sudo ln -sf /etc/nginx/sites-available/healinghandsbynate.mysoviai.com \
            /etc/nginx/sites-enabled/healinghandsbynate.mysoviai.com && \
sudo nginx -t && \
sudo systemctl reload nginx && \
sudo certbot --nginx -d healinghandsbynate.mysoviai.com \
     --non-interactive --agree-tos -m bigsmilescreativeworx@gmail.com --redirect && \
echo "✓ DONE — verify with: curl -I https://healinghandsbynate.mysoviai.com/"
```

That's it. Total time: ~30 seconds.

## What each command does

| Command | What |
|---|---|
| `sudo cp ...` | Copies the vhost config Sovi wrote into nginx's `sites-available/` |
| `sudo ln -sf ...` | Enables it via the standard symlink pattern (matches every other site) |
| `sudo nginx -t` | Validates the config — fails the whole chain if syntax error |
| `sudo systemctl reload nginx` | Picks up the new vhost (no downtime) |
| `sudo certbot --nginx ...` | Issues a Let's Encrypt cert for the domain, modifies the vhost to add the 443 listener and `Strict-Transport-Security` redirect |

After this runs, `https://healinghandsbynate.mysoviai.com/` should serve your site with a valid cert.

## To make this fully autonomous in the future

You can add a narrow sudoers rule so Sovi can run these specific commands without you. Add to `/etc/sudoers.d/aionui-nginx`:
```
aionui ALL=(root) NOPASSWD: /bin/cp /opt/aionui/projects/*/nginx-vhost.conf /etc/nginx/sites-available/*, /bin/ln -sf /etc/nginx/sites-available/* /etc/nginx/sites-enabled/*, /usr/sbin/nginx -t, /usr/bin/systemctl reload nginx, /usr/bin/certbot --nginx *
```

Tight scope (specific paths and binaries only — not full root), one-time rule, eliminates this manual step for every future deploy. But that's optional — you can keep doing the 30-second sudo block per business if you'd rather keep the boundary sharp.
